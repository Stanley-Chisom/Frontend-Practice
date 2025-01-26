const project = [
  {
    name: "PROJECT 1",
    type: "WEB DESIGN",
    pos: "start",
    img: "./assets/img1.jpeg",
  },

  {
    name: "PROJECT 2",
    type: "UI DESIGN",
    pos: "mid",
    img: "./assets/img2.jpg",
  },

  {
    name: "PROJECT 3",
    type: "UI DESIGN",
    pos: "end",
    img: "./assets/img3.jpeg",
  },

  {
    name: "PROJECT 4",
    type: "WEB DESIGN",
    pos: "mid",
    img: "./assets/img4.jpeg",
  },

  {
    name: "PROJECT 5",
    type: "UI DESIGN",
    pos: "end",
    img: "./assets/img5.jpg",
  },

  {
    name: "PROJECT 6",
    type: "UI DESIGN",
    pos: "mid",
    img: "./assets/img6.jpeg",
  },

  {
    name: "PROJECT 7",
    type: "WEB DESIGN",
    pos: "start",
    img: "./assets/img7.jpeg",
  },

  {
    name: "PROJECT 8",
    type: "UI DESIGN",
    pos: "end",
    img: "./assets/img8.jpeg",
  },
];

const createProjects = () => {
  project.forEach((project) => {
    let panel = document.createElement("div");
    panel.classList.add("project", `${project.pos}`);

    let imgWrapper = document.createElement("div");
    imgWrapper.className = `img-wrapper`;

    let img = document.createElement("img");
    img.classList.add("project-img");
    img.src = project.img;

    let projectDetails = document.createElement("div");
    projectDetails.classList.add("project-details");

    let projectName = document.createElement("p");
    projectName.innerText = project.name;

    let projectType = document.createElement("p");
    projectType.innerText = project.type;

    projectDetails.append(projectName, projectType);
    panel.append(imgWrapper, projectDetails);
    imgWrapper.appendChild(img);

    document.querySelector(".projects-slider").appendChild(panel);
  });
};

const blogPosts = [
  {
    title: "BLOG POST ONE",
    time: "3 MIN",
    img: "./assets/img9.jpeg",
  },
  {
    title: "BLOG POST TWO",
    time: "5 MIN",
    img: "./assets/img12.jpeg",
  },
  {
    title: "BLOG POST THREE",
    time: "4 MIN",
    img: "./assets/img6.jpeg",
  },
];

const createBlogPost = () => {
  blogPosts.forEach((blogPost) => {
    let blogSection = document.createElement("div");
    blogSection.classList.add("blog-post");

    let postDiv = document.createElement("div");
    postDiv.classList.add("post");

    let imgWrapper = document.createElement("div");
    imgWrapper.classList.add("post-img-wrapper");

    let img = document.createElement("img");
    img.classList.add("blog-post-img");
    img.src = blogPost.img;

    let postDetails = document.createElement("div");
    postDetails.classList.add("post-details");

    let postTitles = document.createElement("p");
    postTitles.innerText = blogPost.title;

    let postReadTime = document.createElement("p");
    postReadTime.innerText = blogPost.time;

    imgWrapper.appendChild(img);
    postDetails.append(postTitles, postReadTime);
    postDiv.append(imgWrapper, postDetails);
    blogSection.append(postDiv);

    document.querySelector("#blog").appendChild(blogSection);
  });
};

export { createProjects, createBlogPost };
