ids = [];

exports.exist = (id) => {
    for (var key in ids) {
        if (key == id) {
            return true;
            break;
        }
    }
    return false;
}

exports.update = (id) => {
	ids[id] = Date.now();
}

exports.get = (id) => {
    return ids[id];
}