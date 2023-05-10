const  Chat  = require("../models/chat");

class ChatRepo {
    async createChat(data) {
        try {
            console.log(data);
            const response = await Chat.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the repository layer!");
            throw (error);
        }
    }

    mergeChat(arr1, arr2) {
        arr1.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        arr2.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

        let i = 0;
        let j = 0;
        const merged = [];

        while (i < arr1.length && j < arr2.length) {
            const date1 = new Date(arr1[i].createdAt);
            const date2 = new Date(arr2[j].createdAt);

            if (date1 <= date2) {
                merged.push(arr1[i]);
                i++;
            } else {
                merged.push(arr2[j]);
                j++;
            }
        }

        // Add any remaining items from the arrays
        while (i < arr1.length) {
            merged.push(arr1[i]);
            i++;
        }

        while (j < arr2.length) {
            merged.push(arr2[j]);
            j++;
        }

       return merged;

    }

    async getChat(sender, receiver) {
        try {
            const res = await Chat.findAll({ where: { sender: sender, receiver: receiver } });
            const res1 = await Chat.findAll({ where: { sender: receiver, receiver: sender } });
            const response = this.mergeChat(res,res1);
            return response;
        } catch (error) {
            console.log("Something went wrong in the repository layer!");
            throw (error);
        }
    }
}

module.exports = ChatRepo;