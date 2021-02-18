import log4js from "log4js";

const state = {
    _logger: log4js.getLogger('info'),
    /**
     * @description 日志文件名
     */
    loggerFileName: 'main',
    /**
     * @description 应用路径
     */
    appPath: './',
    /**
     * @description 客户端配置信息
     */
    appAccount: 'admin'
}
const getters = {}
const mutations = {
    /**
     * @description init
     * {*} state
     * {*} config
     */
    init: function (state, config) {
        state.appAccount = config.appAccount;
        state.appPath = config.appPath;
        state.loggerFileName = state.appAccount + '_' + new Date().getFullYear() + (new Date().getMonth() + 1) + new Date().getDate();
        let loggerFilePath = state.appPath + '/logs/' + state.loggerFileName + '.log';
        //读取配置文件
        log4js.configure({
            appenders: {
                console: {
                    type: "console"
                },
                cheese: {
                    type: 'file',
                    filename: loggerFilePath,
                    layout: {
                        type: 'pattern',
                        pattern: '%d{yyyy-MM-dd hh:mm:ss} %c %p %x{user}  %m',
                        /** 时间，来源，日志等级， 用户， 内容，*/
                        tokens: {
                            user: function (logEvent) {
                                return state.appAccount;
                            }
                        }
                    }
                }
            },
            categories: {
                default: {
                    appenders: ['cheese', 'console'],
                    level: 'info'
                }
            }
        });
        const logger = log4js.getLogger('console');
        console.log = logger.info.bind(logger);
        console.info = logger.info.bind(logger)
        console.warn = logger.warn.bind(logger);
        console.error = logger.error.bind(logger);
        console.trace = logger.trace.bind(logger)
    },
    /**
     * 添加日志信息
     * level 日志等级【info，warn，error，fatal】
     * @param {string} info 日志内容
     */
    addLog: function (state, info) {
        // 判断日志是否为当前日期
        if (state.loggerFileName !== state.appAccount + '_' + new Date().getFullYear() + (new Date().getMonth() + 1) + new Date().getDate()) {
            mutations.init(state.appAccount, state.appPath);
        }
        state._logger = log4js.getLogger(info.level);
        state._logger[info.level](info.info);
    }
}
const actions = {}
export default {
    state,
    getters,
    mutations,
    actions
}
