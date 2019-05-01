import axios from "axios";

export default {
    getChihuahuas: function() {
        return axios.get("/api/chihuahuas");
    },

    addChihuahua: function(chihuahua) {
        /*chihuahua = {
            name: "Some Name",
            image: "someimage.png"
        }*/
        return axios.post("/api/chihuahuas", chihuahua);
    }
}