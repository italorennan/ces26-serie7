import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        padding: 10
    },

    calculator: {
        backgroundColor: '#f6f6f6',
        borderWidth: 1,
        borderColor: '#d0d0d0',
        padding: 15
    },
  
    h1: {
        color: '#191970',
        alignItems: 'center',
        fontSize: 20
    },

    h2: {
        color: '#483d8b',
        alignItems: 'center',
        fontSize: 18
    },

    h3: {
        color: '#483d8b',
        alignItems: 'center',
        fontSize: 16
    },

    h4: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },

    h5: {
        color: 'black',
        fontSize: 16,
        fontWeight: '100'
    },

    p: {
        backgroundColor: '#dcdcdc',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        textAlign: 'justify'
    },

    a: {
        fontWeight: '900'
    },

    display: {
        width: '70%',
        minHeight: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        padding: 5,
        textAlign: 'center',
        fontSize: 16,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    button: {
        backgroundColor: '#f0f0f0',
        height: 35,
        borderColor: '#d0d0d0',
        borderWidth: 1,
        elevation: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    row: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'center'
    }
});