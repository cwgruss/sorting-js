const merge = (...args) => {
    if (args.length < 1) {
        return null;
    }
    return args.reduce((previous, current) => {
        return previous.concat(current);
    });

};

exports.merge = merge;
