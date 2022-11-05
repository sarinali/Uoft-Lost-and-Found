class Posting {
    constructor(name, location1, location2, imageCollection, tagCollection, caption) {
      this.postingName = name
      this.building = location1
      this.exactLocation = location2
      this.postingImages = imageCollection
      this.postingTags = tagCollection
      this.postingCaption = caption


    }
  }

  // name of the object -> string
  // location 1 (building)  -> string
  // location 2 (floor/room) -> string
  // collection of images -> list[image]
  // collection of tags -> list[tags]
  // caption -> string