user = User.find(1)
artist1 = user.artists.find(1)
artist2 = user.artists.find(2)

# Concert id: nil, title: nil, name: nil, city: nil, state: nil, status: nil, ticket_url: nil, artist_id: 5, date: nil, created_at: nil, updated_at: nil>

artist1.concerts.create(title: 'My first show with these people at this place', name: 'Madison Square Garden', city: 'New York', state: 'NY', status: 'available', ticket_url: 'www.tickets.com', date: '2016-04-13 01:56:06 -0400')

artist1.concerts.create(title: 'My second show with these people at this place', name: 'Madison Square Garden', city: 'New York', state: 'NY', status: 'available', ticket_url: 'www.tickets.com', date: '2016-04-12 01:56:06 -0400')

artist2.concerts.create(title: 'My third show with these people at this place', name: 'Madison Square Garden', city: 'New York', state: 'NY', status: 'available', ticket_url: 'www.tickets.com', date: '2016-04-13 01:56:06 -0400')

artist2.concerts.create(title: 'My fourth show with these people at this place', name: 'Madison Square Garden', city: 'New York', state: 'NY', status: 'available', ticket_url: 'www.tickets.com', date: '2016-04-12 01:56:06 -0400')
