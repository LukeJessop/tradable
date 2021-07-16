INSERT INTO users (Username, Email, Phone, Password, pfp, showEmail, showPhone)
VALUES ($1, $2, $3, $4, 'https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg', false, false)
RETURNING *;