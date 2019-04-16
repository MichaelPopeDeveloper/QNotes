import User from '../models/User';

export default class NoteController {
    public static createNote(req: any, res: any) {
        const { title, note } = req.body;
        if (req.user) {
            User.findOne({ _id: req.user.id }) // Update Note!!
                .then((result: any) => {
                    const user = result;
                    delete user.password;
                    delete user.id;
                    res.send(user);
                })
                .catch((error: any) => res.send(error));
        }
    }
}