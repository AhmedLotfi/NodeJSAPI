exports.getPosts = (req, res) => {

    res.json([{
            "title": "POST!1",
            "description": "lorem lorem"
        },
        {
            "title": "POST!2",
            "description": "lorem lorem"
        }
    ])

};