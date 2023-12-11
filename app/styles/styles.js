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
        padding: 10,
        backgroundColor: '#262626',
        justifyContent: 'center',
    },
    dayButtonText: {
        fontSize: 20,
        color: '#FFFFFF',
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
    topMenuTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#262626',
        padding: 10,
    },
    topMenuTitleText: {
        color: "#FFFFFF",
        fontSize: 20,
    },
    bodyDetail: {
        // marginTop: 24,
        padding: 12,
    },
    detailLine: {
        flexDirection: 'row',
        gap: 10,
        paddingTop: 6,
    },
    lineKey: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 18,
    },
    lineValue: {
        flex: 2,
        fontSize: 18,
    },
    detailBlock:{
        paddingTop: 6,

    },
    detailBlockKey:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    activity: {
        padding: 6,
    },
    activityText: {
        fontSize: 18,
    },
    videoBox: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#262626',
    },
    video: {
        width: 400,
        height: 240,
        backgroundColor: '#262626',
    },
    playerButtonsBox: {
        flexDirection: 'row',
        backgroundColor: '#262626',
    },
    playerButton: {
        flex: 1,
        fontSize: 20,
        padding: 20,
    },
    notFoundText: {
        fontSize: 20,
    },
});