let root = {
  type: "dir",
  children: {
    home: {
      type: "dir",
      children: {
        myname: {
          type: "dir",
          children: {
            "filea.txt": {
              type: "file",
            },
            "fileb.txt": {
              type: "file",
            },
            projects: {
              type: "dir",
              children: {
                mysupersecretproject: {
                  type: "dir",
                  children: {
                    mysupersecretfile: {
                      type: "file",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export default class pathCTRL {
  static apiGetPath(req, res, next) {
    let myPath = req.params["mypath"];
    let path = root.children;
    let paths = [];
    let key;
    while (!Object.keys(path).includes(myPath)) {
      key = Object.keys(path);
      for (let i = 0; i < key.length; i++) {
        if (path[key[i]].type === "dir") {
          paths.push(key[i]);
          path = path[key[i]].children;
          break;
        }
      }
    }
    paths.push(myPath);
    path = path[myPath];
    if (path.type === "dir")
      return res.json({ type: "dir", dir: Object.keys(path.children), paths });
    if (path.type === "file")
      return res.json({ type: "file", fileName: myPath, paths });
  }
}
