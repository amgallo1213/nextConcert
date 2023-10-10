import connectMongo from '@/utils/connectMongo';
import Concert from '@/models/Concert';

export default async function addConcert(req, res) {
    try {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        console.log('CREATING DOCUMENT');
        const concert = await Concert.create(req.body);
        console.log('CREATED DOCUMENT');

        res.json({ concert });
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}