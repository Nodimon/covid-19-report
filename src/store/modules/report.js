const SET_REPORT = "SET_REPORT";
const SET_DATES = "SET_DATES";

export default {
    state: {
        report: [],
        dates: []
    },
    mutations: {
        [SET_REPORT](state, report) {
            state.report = report
        },
        [SET_DATES](state, dates) {
            state.dates = dates
        }
    },
    actions: {
        fetchReport({commit}) {
            return new Promise((resolve, reject) => {
                axios.get('https://pomber.github.io/covid19/timeseries.json')
                    .then(({data}) => {
                        // console.log('Report', data)
                        // console.log('Dates', getDates(data))

                        commit(SET_REPORT, Object.entries(data));
                        // commit(SET_REPORT, test);
                        commit(SET_DATES, getDates(data));

                        resolve('Success')
                    })
                    .catch(error => {
                        console.log('Error', error)
                        reject(error)
                    })
            })
        }
    },
    getters: {
        dates: state => {
            return state.dates
        },
        report: state => {
            return state.report
        },
        getReportByName: state => name => {
            return state.report
        },
        getReportByDate: state => date => {
            return state.report
        }
    }
}

// Get all dates from the first country
// Not the best solution but good enough
function getDates(report) {
    const firstProp = Object.keys(report)[0];

    return firstProp ?
        report[firstProp].map(item => {
            return item.date
        })
    : []
}