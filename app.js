const searchDeleteConfig = { serverId: 1586, active: true };

const searchDeleteHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_1586() {
    return searchDeleteConfig.active ? "OK" : "ERR";
}

console.log("Module searchDelete loaded successfully.");