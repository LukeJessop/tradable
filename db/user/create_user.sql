INSERT INTO users (Username, Email, Phone, Password, pfp, showEmail, showPhone)
VALUES ($1, $2, $3, $4, false, false)
RETURNING *;