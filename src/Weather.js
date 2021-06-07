import React from 'react';
import axios from 'axios';
class Weather extends React.Component {

    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            cityInfoList: [{ id: "", cityId: "", cityEngName: "", cityChiName: "", country: "" }],
            weatherObject: {
                city: '',
                updateTime: '',
                weather: '',
                temperature: '',
                wind: ''
            },
            isLoaded: false
        };

        this.getWehtherInfo = this.getWehtherInfo.bind(this);
    }
    // 钩子函数  获取城市
    componentDidMount() {
        var that = this;
        let url = "http://localhost:8081/pactera/dev/city/getCityList";
        axios.get(url)
            .then(function (response) {
                console.log(response.data.data);
                that.setState({
                    cityInfoList: response.data.data,
                    isLoaded: false
                });
            })
            .catch(function (error) {
                console.log(error);

            })
    }


    handelSubmit = (e) => {
        //阻止submit的提交事件
        e.preventDefault();
        console.log(this.state.name, this.state.city);
    }

    /**
     * 获取天气
     */
    getWehtherInfo(e) {
        let that = this;
        that.setState({
            city: e.target.value,
            isLoaded: true
        })
        if (e.target.value.length > 0) {
            let url = "http://localhost:8081/pactera/dev/weatherAPI/getWehtherInfo?city=" + e.target.value;
            axios.get(url)
                .then(function (response) {
                    console.log(response.data.data);
                    that.setState({
                        weatherObject: response.data.data,
                        isLoaded: true
                    });
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }


    render() {
        if (this.state.isLoaded) {
            return (
                <div>
                    <div>
                        <br />
                        <p>天气查询</p>
                        <form onSubmit={this.handelSubmit}>
                            <br />
                            <label>当前城市:</label>
                            <select value={this.state.city} onChange={e => this.getWehtherInfo(e)}>
                                {
                                    (this.state.cityInfoList).map(function (cityInfo) {
                                        return <option key={cityInfo.id}>{cityInfo.cityEngName}</option>
                                    })
                                }
                            </select>
                            <br />
                        </form>
                    </div>
                    <br></br>
                    <div>
                        <table style={{ background: '#eee', width: '400px', border: '1px solid #C40000' }}>
                            <tr><td >{Object.keys(this.state.weatherObject)[0]}</td>
                                <td >{this.state.weatherObject.city}</td>
                            </tr>
                            <tr>
                                <td>{Object.keys(this.state.weatherObject)[1]}</td>
                                <td>{this.state.weatherObject.updateTime}</td>
                            </tr>
                            <tr>
                                <td>{Object.keys(this.state.weatherObject)[2]}</td>
                                <td>{this.state.weatherObject.weather}</td></tr>
                            <tr>
                                <td>{Object.keys(this.state.weatherObject)[3]}</td>
                                <td>{this.state.weatherObject.temperature}</td>
                            </tr>
                            <tr>
                                <td>{Object.keys(this.state.weatherObject)[4]}</td>
                                <td>{this.state.weatherObject.wind}</td>
                            </tr>
                        </table>
                    </div>
                </div>

            )

        } else {
            return (
                <div>
                    <br />
                    <p>天气查询</p>
                    <form onSubmit={this.handelSubmit}>
                        <br />
                        <label>当前城市: </label>
                        <select value={this.state.city} onChange={e => this.getWehtherInfo(e)}>
                            {
                                (this.state.cityInfoList).map(function (cityInfo) {
                                    return <option key={cityInfo.id}>{cityInfo.cityEngName}</option>
                                })
                            }
                        </select>
                        <br />
                    </form>
                </div>
            )
        }

    }
}

export default Weather;