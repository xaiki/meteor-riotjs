RiotMeteor = {
        Observe: function (cursor, target) {
                var tag = this;
                target = target || 'cursor';

                if (! this[target])
                        this[target] = [];

                var reset = function () {
                        tag[target] = cursor.fetch();
                        console.error ('warning stupid implementation', tag[target]);
                };

                cursor.observe({
                        addedAt: function (document, atIndex, before) {
                                tag[target].push(document);
                                tag.update();
                        },
                        changedAt: function (newDocument, oldDocument, atIndex){
                                tag[target][atIndex] = newDocument;
                                tag.update();
                        },
                        removedAt: function (oldDocument, atIndex) {
                                tag[target].splice(atIndex, 1);
                                tag.trigger('update');
                        },
                        movedTo: function (document, fromIndex, toIndex, before){
                                reset();
                                tag.update();
                        },
                });
        }
};


if (typeof exports === "object") {
        exports = RiotMeteor;
}
