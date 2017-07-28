# Button Demo

- order: 0


自定义CheckBox

---

````js

/** @jsx createElement */
import {createElement, Component,render } from 'rax';
import {View,Text,Page} from 'nuke';
import CheckBox from 'wd-nuke-checkbox';

let App = class NukeDemoIndex extends Component {
    constructor() {
        super();
    }
    
    state = {
        checked: true,
        checked2: true,
        checked3: 'indeterminate'
    }

    render() {
        return (
            <Page title="旺店CheckBox">
                <Page.Intro main="基础使用"></Page.Intro>

                <View style={[styles.wrapMargin, styles.wrapRow]}>

                    <CheckBox checked={this.state.checked} onPress={()=> {
                        this.setState({checked: !this.state.checked})
                        }}>
                    </CheckBox>

                    <CheckBox size="medium" style={styles.ml24} checked={this.state.checked} onPress={()=> {
                        this.setState({checked: !this.state.checked})
                        }}>
                    </CheckBox>

                    <CheckBox size="large" style={styles.ml24} checked={this.state.checked} onPress={()=> {
                        this.setState({checked: !this.state.checked})
                        }}>
                    </CheckBox>

                </View>


                <Page.Intro main="disabled"></Page.Intro>

                <View style={[styles.wrapMargin, styles.wrapRow]}>
                    <CheckBox checked={this.state.checked2} disabled={true}></CheckBox>
                    <CheckBox size="medium" style={styles.ml24} checked={this.state.checked2} disabled={true}></CheckBox>
                    <CheckBox size="large" style={styles.ml24} checked={this.state.checked2} disabled={true}></CheckBox>
                </View>
                
                
                <Page.Intro main="中间状态"></Page.Intro>

                <View style={[styles.wrapMargin, styles.wrapRow]}>
                    <CheckBox checked={this.state.checked3}></CheckBox>
                    <CheckBox size="medium" style={styles.ml24}  checked={this.state.checked3}></CheckBox>
                    <CheckBox size="large" style={styles.ml24} checked={this.state.checked3}></CheckBox>
                </View>

                <Page.Intro main="设置颜色"></Page.Intro>

                <View style={[styles.wrapMargin, styles.wrapRow]}>
                    <CheckBox activeStyle={{backgroundColor: '#ff0000'}} checked={this.state.checked} onPress={()=> {
                        this.setState({checked: !this.state.checked})
                        }}>
                    </CheckBox>

                    <CheckBox size="medium" style={styles.ml24} activeStyle={{backgroundColor: '#00ff00'}} checked={this.state.checked} onPress={()=> {
                        this.setState({checked: !this.state.checked})
                        }}>
                    </CheckBox>

                    <CheckBox size="large" style={styles.ml24} activeStyle={{backgroundColor: '#ffff00'}} checked={this.state.checked} onPress={()=> {
                        this.setState({checked: !this.state.checked})
                        }}>
                    </CheckBox>
                </View>

                <Page.Intro main="正方形"></Page.Intro>

                <View style={[styles.wrapMargin, styles.wrapRow]}>
                    <CheckBox rect checked={this.state.checked} onPress={()=> {
                        this.setState({checked: !this.state.checked})
                        }}>
                    </CheckBox>
                    <CheckBox size="medium" style={styles.ml24} rect checked={this.state.checked} onPress={()=> {
                        this.setState({checked: !this.state.checked})
                        }}>
                    </CheckBox>
                    <CheckBox size="large" style={styles.ml24} rect checked={this.state.checked} onPress={()=> {
                        this.setState({checked: !this.state.checked})
                        }}>
                    </CheckBox>
                </View>

            </Page>
        );
    }
}
const styles={
    btnWithMargin:{
        marginTop:'30rem', 
        marginBottom:'50rem', 
        marginLeft:'42rem', 
        marginRight:'42rem' 
    },
    wrapMargin: {
        marginTop:'24rem', 
        marginBottom:'24rem', 
        marginLeft:'42rem', 
        marginRight:'42rem'
    },
    btnLine:{
        marginTop:'30rem', 
        marginBottom:'50rem', 
        paddingLeft:'42rem', 
        paddingRight:'42rem' //#1170bc;
    },
    wrapRow: {
        flexDirection: 'row'
    },
    ml24: {
        marginLeft: '24rem'
    }
}
render(<App/>);


````
