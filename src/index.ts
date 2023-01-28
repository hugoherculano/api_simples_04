import express from 'express';
const app = express();

app.get('/', (req, res) => {
    return res.status(200).json({ success: 'OK' })
})

app.listen(8000, () => {
    console.log("OLÁ, MUNDÃO!")
});