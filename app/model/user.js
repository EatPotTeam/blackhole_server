var ids = [];

exports.exist = (id) => {
    if (ids[id] !== undefined) return true;
    return false;
};

exports.update = (id) => {
	ids[id] = Date.now();
};

exports.get = (id) => {
    return ids[id];
};