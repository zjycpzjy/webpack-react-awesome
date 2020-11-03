import React, {Component} from 'react';
import '../css/pengyou.css'
import { Button } from 'antd';
// import { Components } from 'antd/lib/date-picker/generatePicker';
const dataSource = [1,2,322222222,4,51111111111,6,888888888,3,55555,3,32222226];
const colorSource = ['#FF00FF','#800080','#483D8B','#778899','#1E90FF','#7FFFAA','#FFFF00','#FFA500','#800000','#696969','#CD5C5C'];
let baseUrl = "";
const env = process.env.NODE_ENV;
if(env === "production" || env === "none"){
	baseUrl= "https://www.production.com/public/"; 
}else{
	baseUrl= "https://www.development.com/public/"; 
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { style:'#DC143C' }
    }
    
    render() { 
        return ( <div>
            this is App Page；
            <Button type="primary" onClick={this.getTheme}>你好</Button>
            {
                dataSource.map(item=>item)
                // dataSource.sort()
            }
    
            </div> );
    }

    getTheme(data) {
        let aa = colorSource[Math.floor((Math.random()*colorSource.length))]
        window.less
          .modifyVars({
            '@primary-color': aa,
            '@layout-header-padding': '0px'
          })
          .then(() => {
            this.setState({ style: '#DC143C' });
          })
          .catch(error => {
            console.log(error);
          });
    }
}
 
export default App;
