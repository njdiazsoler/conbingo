const Home = props => {
  return <h2 style={{ color: 'white', marginTop: 20 }}>Please select your conference above! ↑↑↑</h2>;
}

export default Home

// function Topics() {
//   let match = useRouteMatch();
//   const idA = 3214;
//   const idB = 1562;

//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/${idA}`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/${idB}`}>
//             Props v. State
//           </Link>
//         </li>
//       </ul>

//       {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:bingoId`}>
//           <Topic />
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   let { bingoId } = useParams();
//   return <h3>Requested bingo ID: {bingoId}</h3>;
// }
