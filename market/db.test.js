import { MongoClient } from 'mongodb';

describe('mongo connection test', () => {
    let db;

    // beforeAll(async() => {
    //     db = CustomConnection.getConnection();
    //     expect(db).toBeDefined();
    //     expect(db.databaseName).toBe('market');
    // })

    // @TODO 테스트 데이터 삭제 로직 추가
    // afterAll(async(done) => {
    //     CustomConnection.close();
    //     done();
    // })

    // test('getConnection', async() => {
    //     db = CustomConnection.getConnection();
    //     expect(db).toBeDefined();
    //     CustomConnection.close();
    // })

    it('await, async', async() => {
        const pro1 = (async() => {
            console.log('hi');
            await Promise.resolve('hi');
        });

        const pro2 = (async() => {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('hi1');
                    resolve('hi1');
                }, 200)
            })
        });

        await expect(pro1()).resolves.toEqual('hi');
        await expect(pro2()).resolves.toEqual('hi1');
    })

    // test('connection', async (done) => {
    //     const files = db.collection('files');

    //     await files.insertMany([
    //         { type: 'Document' },
    //         { type: 'Video' },
    //         { type: 'Image' },
    //         { type: 'Document' },
    //         { type: 'Image' },
    //         { type: 'Document' }
    //     ]);

    //     const topFiles = await files
    //         .aggregate([
    //             { $group: { _id: '$type', count: { $sum: 1 } } },
    //             { $sort: { count: -1 } },
    //         ])
    //         .toArray();

    //     expect(topFiles).toEqual([
    //         { _id: 'Document', count: 3 },
    //         { _id: 'Image', count: 2 },
    //         { _id: 'Video', count: 1 },
    //     ]);
        
    //     done();
    // })
});