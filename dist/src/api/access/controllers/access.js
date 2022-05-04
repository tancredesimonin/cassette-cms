"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("@strapi/utils"));
const { ForbiddenError, UnauthorizedError } = utils_1.default.errors;
module.exports = ({ strapi }) => ({
    /**
     * ### Request ownership of a given object, in a given collection type, by authenticated user
     *
     * *POST* `/access/request-ownership`
     *
     */
    async requestOwnership(ctx) {
        const allowedCollections = ["artist"];
        // retrieve the body
        const { collection, id } = ctx.request.body.data;
        const { id: userId } = ctx.state.auth.credentials;
        if (!userId) {
            throw new UnauthorizedError("You are not authorized");
        }
        // check parameters
        if (!collection || !id) {
            ctx.send({
                ok: false
            });
        }
        // check the required collection to update
        if (!allowedCollections.includes(collection.trim())) {
            ctx.send({
                ok: false
            });
        }
        // get the object
        const collectionUid = "api::" + collection.trim() + "." + collection.trim();
        const entry = await strapi.entityService.findOne(collectionUid, Number(id), {
            populate: { owner: true }
        });
        if (entry && entry.owner !== null) {
            throw new ForbiddenError("You are not authorized");
            // TODO case where you already are the owner
        }
        let updatedEntry;
        // check if object already has owner
        if (entry && entry.owner === null) {
            // set owner
            updatedEntry = await strapi.entityService.update(collectionUid, id, { data: { owner: userId } });
            // const sanitizedEntry = await utils.sanitize.contentAPI.output(updatedEntry.owner, strapi.getModel("plugin::users-permissions.user"), { auth })
        }
        ctx.response.body = updatedEntry;
        ctx.status = 200;
        // if no update
        // else return err
    },
});
