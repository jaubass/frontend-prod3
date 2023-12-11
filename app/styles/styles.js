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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
        paddingTop: 50,
        paddingBottom: 50,
    },
    pageTitleText: {
        fontSize: 30,
    },
    menu: {
        // flex: 5,
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
    topMenuBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#262626',
        marginTop: 30,
    },
    topMenuItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#262626',
        padding: 20,
    },
    topMenuItemText: {
        color: "#FFFFFF",
        fontSize: 20,
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
    playerButtonsBox: {
        flexDirection: 'row',
        backgroundColor: '#262626',
    },
    playerButton: {
        flex: 1,
        fontSize: 20,
        padding: 20,
    }
});