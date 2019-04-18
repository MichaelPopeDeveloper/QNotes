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
                        notes: {title, note}
                    }
                }) 
                .then((result: any) => {

                    User.findOne({_id: req.user.id})
                    .then(userDoc => {
                        const user = userDoc as any;
                        delete user.password;
                        delete user.id;
                        console.log('create post user', user);
                        res.send({user});
                    })
                    .catch(error => res.send(error));
                    
                })
                .catch((error: any) => res.send(error));
        }
    }
}