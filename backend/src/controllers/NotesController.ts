import User from '../models/User';

export default class NoteController {
    public static createNote(req: any, res: any) {
        const { title, note } = req.body;
        if (req.user) {
            User.findOneAndUpdate(
                { _id: req.user.id },
                {
                    $push:
                    {
                        notes: { title, note }
                    }
                })
                .then((result: any) => {

                    User.findOne({ _id: req.user.id })
                        .then(userDoc => {
                            const user = userDoc as any;
                            delete user.password;
                            delete user.id;
                            console.log('create post user', user);
                            res.send({ user });
                        })
                        .catch(error => res.send(error));

                })
                .catch((error: any) => res.send(error));
        }
    }

    public static retrieveNote(req: any, res: any) {
        const { id } = req.body;
        if (req.user) {
            User.findOne({ _id: req.user._id })
                .then((userDoc: any) => {
                    const user = userDoc as any;
                    const retrievedNote = user.notes.find((note: any) => note._id === id)
                    console.log('retrieved note: ', retrievedNote);
                    return retrievedNote ? res.send({ retrievedNote }) : res.send({ error: 'The note was not found...' });
                })
                .catch((error: any) => res.send({ error }));
        }
    }
}