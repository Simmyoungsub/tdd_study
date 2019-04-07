import { MongoClient } from 'mongodb';
import { MarketItem } from '../../market/marketItem';
import { Market } from '../../market/market';

describe('Market Repository Test', () => {
    let connection;
    let db;

    beforeAll(async() => {
        connection = await MongoClient.connect('mongodb://192.168.122.128:27017');
        db = await connection.db('market');
    });

    afterAll(async() => {
        db = null;
        await connection.close();
    })

    describe('add', () => {
        it('one add', () => {
            const candy = new MarketItem({name: '사탕', price: 200});
            const market = new Market();
            market.setName('A Mart');
            market.add(candy);
            db.collection('market').insertOne(market, (err, r) => {
                expect(err).toBe(null);
                expect(r.insertedCount).toBe(1);
            });
        });

        it('two more add', () => {
            const candy = new MarketItem({name: '사탕', price: 200});
            const choco = new MarketItem({name: '초콜릿', price: 500});
            const marketB = new Market();
            const marketC = new Market();

            marketB.setName('B Mart');
            marketB.add(candy);

            marketC.setName('C Mart');
            marketC.add(choco);

            db.collection('market').insertMany([marketB, marketC], (err, r) => {
                expect(err).toBe(null);
                expect(r.insertedCount).toBe(2);
            });
        });
    })

    describe('remove', () => {
        it('one remove', () => {
            db.collection('market').deleteMany({name: 'A Mart'}, (err, r) => {
                expect(err).toBe(null);
                expect(r.deletedCount).toBe(1);
            });
        });
    
        it('two more remove', () => {
            db.collection('market').deleteMany({name: 'A Mart'}, (err, r) => {
                expect(err).toBe(null);
                expect(r.deletedCount).toBe(1);
            });
        });
    })

    describe('update', () => {
        it('one update', () => {
            const candy = new MarketItem({name: '사탕', price: 200});
            const choco = new MarketItem({name: '초코', price: 500});

            const market = new Market();
            market.setName('A Mart');
            market.add(candy);
            market.add(choco);
            
            db.collection('market').updateOne({name: 'A Mart'}, {$set: market}, (err, r) => {
                expect(err).toBe(null);
                expect(r.matchedCount).toBe(1);
                expect(r.modifiedCount).toBe(1);
            })
        })
    });

    describe('get', () => {
        it ('findAll', () => {
            db.collection('market').find({name: 'A Mart'}).toArray((err, docs) => {
                expect(err).toBe(null);
                expect(docs.length).toBe(1);
            })
        });
    })
});