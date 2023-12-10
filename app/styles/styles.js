import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    pageTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
    },
    pageTitleText: {
        fontSize: 30,
    },
    pagesubtitleText: {
        fontSize: 20,
    },
    dayButton: {
        flex: 1,
        margin: 1,
        padding: 5,
        backgroundColor: '#ccc',
        borderRadius: 5,
        justifyContent: 'center',
    },
    dayButtonText: {
        fontSize: 20,
        color: '#123456',
    },
    detailLine: {
    },
    videoBtn: {
        backgroundColor: '#ccc',
    },
    videoBox: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCCCFF',
    },
    video: {
        width: 400,
        height: 240,
        backgroundColor: '#FFCCCC',
    },
});