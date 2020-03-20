const SET_REPORT = "SET_REPORT";
const SET_DATES = "SET_DATES";
const SET_SEARCH = "SET_SEARCH";

export default {
    state: {
        report: [],
        dates: [],
        search: ''
    },
    mutations: {
        [SET_REPORT](state, report) {
            state.report = report
        },
        [SET_DATES](state, dates) {
            state.dates = dates
        },
        [SET_SEARCH](state, search) {
            state.search = search
        }
    },
    actions: {
        fetchReport({commit}) {
            return new Promise((resolve, reject) => {
                axios.get('https://pomber.github.io/covid19/timeseries.json')
                    .then(({data}) => {

                        commit(SET_REPORT, Object.entries(data));
                        commit(SET_DATES, getDates(data));

                        resolve('Success')
                    })
                    .catch(error => {
                        console.log('Error', error)
                        reject(error)
                    })
            })
        },
        search({commit}, search) {
            commit(SET_SEARCH, search);
        }
    },
    getters: {
        dates: state => {
            return state.dates
        },
        report: state => {
            return state.report.filter(record => record[0].toLowerCase().indexOf(state.search.toLowerCase()) > -1)
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