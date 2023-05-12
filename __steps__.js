/**
 * 1. Create a post api on the server side
 * 2. client side send data via post
 * 3. set fetch method  inside the fetch options(second parameter)
 * 4. options will have three things : method, headers{'content-type': 'application/json'}, body(don'd forget to json stringify  )
 * 5. On the server side : don't forget to add express.json() middleware
 * **/ 