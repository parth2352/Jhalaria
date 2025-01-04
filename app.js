// Add Lesson (Artist Dashboard)
app.post('/api/lessons', (req, res) => {
    const { artist_id, title, description, price, time } = req.body;
    const query = 'INSERT INTO lessons (artist_id, title, description, price, time) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [artist_id, title, description, price, time], (err, results) => {
        if (err) throw err;
        res.status(201).json({ message: 'Lesson added successfully' });
    });
});

// Edit Lesson (Artist Dashboard)
app.put('/api/lessons/:lesson_id', (req, res) => {
    const { lesson_id } = req.params;
    const { title, description, price, time } = req.body;
    const query = 'UPDATE lessons SET title = ?, description = ?, price = ?, time = ? WHERE lesson_id = ?';
    db.query(query, [title, description, price, time, lesson_id], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Lesson updated successfully' });
    });
});

// Delete Lesson (Artist Dashboard)
app.delete('/api/lessons/:lesson_id', (req, res) => {
    const { lesson_id } = req.params;
    const query = 'DELETE FROM lessons WHERE lesson_id = ?';
    db.query(query, [lesson_id], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Lesson deleted successfully' });
    });
});

// Add Performance (Artist Dashboard)
app.post('/api/performances', (req, res) => {
    const { artist_id, name, genre, price, time, date } = req.body;
    const query = 'INSERT INTO performances (artist_id, name, genre, price, time, date) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [artist_id, name, genre, price, time, date], (err, results) => {
        if (err) throw err;
        res.status(201).json({ message: 'Performance added successfully' });
    });
});

// Edit Performance (Artist Dashboard)
app.put('/api/performances/:performance_id', (req, res) => {
    const { performance_id } = req.params;
    const { name, genre, price, time, date } = req.body;
    const query = 'UPDATE performances SET name = ?, genre = ?, price = ?, time = ?, date = ? WHERE performance_id = ?';
    db.query(query, [name, genre, price, time, date, performance_id], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Performance updated successfully' });
    });
});

// Delete Performance (Artist Dashboard)
app.delete('/api/performances/:performance_id', (req, res) => {
    const { performance_id } = req.params;
    const query = 'DELETE FROM performances WHERE performance_id = ?';
    db.query(query, [performance_id], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Performance deleted successfully' });
    });
});

// Add Custom Service (Artist Dashboard)
app.post('/api/custom_services', (req, res) => {
    const { artist_id, title, description, price } = req.body;
    const query = 'INSERT INTO custom_services (artist_id, title, description, price) VALUES (?, ?, ?, ?)';
    db.query(query, [artist_id, title, description, price], (err, results) => {
        if (err) throw err;
        res.status(201).json({ message: 'Custom service added successfully' });
    });
});

// Edit Custom Service (Artist Dashboard)
app.put('/api/custom_services/:service_id', (req, res) => {
    const { service_id } = req.params;
    const { title, description, price } = req.body;
    const query = 'UPDATE custom_services SET title = ?, description = ?, price = ? WHERE service_id = ?';
    db.query(query, [title, description, price, service_id], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Custom service updated successfully' });
    });
});

// Delete Custom Service (Artist Dashboard)
app.delete('/api/custom_services/:service_id', (req, res) => {
    const { service_id } = req.params;
    const query = 'DELETE FROM custom_services WHERE service_id = ?';
    db.query(query, [service_id], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Custom service deleted successfully' });
    });
});
