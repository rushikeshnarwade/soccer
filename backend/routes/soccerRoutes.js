import {
    addNewPlayer,
    getPlayers,
    getPlayerWithID,
    UpdatePlayer,
    deletePlayer
} from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
        // GET endpoint
        .get(getPlayers)

        // POST endpoint
        .post(addNewPlayer);

    app.route('/player/:PlayerId')
        // Get specific player
        .get(getPlayerWithID)

        // Update specific player
        .put(UpdatePlayer)

        // Delete specific player
        .delete(deletePlayer);
}

export default routes;