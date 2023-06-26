import mongoose, { Schema, model, models } from 'mongoose'

const CaseSchema = new Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    argument: {
        type: String,
        required: [true, 'Argument is required.']
    },
    topic: {
        type: String,
        required: [true, 'Topic is required.']
    },
    side: {
        type: mongoose.Schema.Types.Boolean,
        required: [true, 'Topic is required.']

    },
    counterargument: {
        type: String,
        required: [false]

    }
})

const Case = models.Case || model('Case', CaseSchema)

export default Case