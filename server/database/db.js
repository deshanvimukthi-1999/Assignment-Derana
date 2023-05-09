import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://Deshan:mamadeshan1@cluster0.6u5tvnj.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;