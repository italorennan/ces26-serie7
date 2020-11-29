import React from 'react';
import { Text, Button, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

class Calculator extends React.Component {
    render() {
        return (
            <>
                <View style={styles.display}>
                    <Text>{this.props.valueExhibited}</Text>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.write('7')}>
                        <Text>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.write('8')}>
                        <Text>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.write('9')}>
                        <Text>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.write('+')}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.write('4')}>
                        <Text>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.write('5')}>
                        <Text>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.write('6')}>
                        <Text>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.write('-')}>
                        <Text>-</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.write('1')}>
                        <Text>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.write('2')}>
                        <Text>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.write('3')}>
                        <Text>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.write('*')}>
                        <Text>*</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.clean()}>
                        <Text>C</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.write('0')}>
                        <Text>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.write('.')}>
                        <Text>.</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.write('/')}>
                        <Text>/</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.evaluate()}>
                        <Text>=</Text>
                    </TouchableOpacity>
                </View>
            </>
        );
    }
}

export default Calculator;