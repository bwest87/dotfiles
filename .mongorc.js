DBCollection.prototype.findById = function(id) {
    if (!(id instanceof ObjectId)) id = ObjectId(id);
    return this.find({ _id : id });
};
