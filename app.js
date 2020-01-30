const http = new easyHTTP();

// // Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

// // Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

// Create a post
// let data = {
//   title: 'Custom Post',
//   body: 'This is a custom post'
// };

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(
//   err,
//   res
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

// Update a post
// let data = {
//   title: 'Custom Post',
//   body: 'This is a custom post'
// };
// http.put('https://jsonplaceholder.typicode.com/posts/2', data, function(
//   err,
//   res
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });

// Delete a post
http.delete('https://jsonplaceholder.typicode.com/posts/2', function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
