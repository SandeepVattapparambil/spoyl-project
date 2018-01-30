//unsplash clientId
const clientId = '5a419933621f55950741e4c30182c1d5f99974112a96cf0c49d8d9091cc0ba7e';
let url = 'https://api.unsplash.com/photos?client_id=' + clientId + '';
//AJAX Get method
const makeAjaxCall = (url, methodType) => {
    let promiseObj = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(methodType, url, true);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let resp = xhr.responseText;
                    let respJson = JSON.parse(resp);
                    resolve(respJson);
                } else {
                    let err = new Error('xhr failed');
                    reject(err);
                }
            } else {
                console.log('xhr processing going on');
            }
        };
        console.log('request sent succesfully');
    });
    return promiseObj;
};

const createDocumentFragment = (imageDataObj) => {
    let gridContainer = document.querySelector('.container-grid');
    let fragment = document.createDocumentFragment();
    let holder = document.createElement('div');
    holder.classList = 'holder';
    holder.classList += ' holder-1';
    let image = document.createElement('img');
    image.src = imageDataObj.thumb;
    image.className = 'thumb';
    let likes = document.createElement('span');
    likes.textContent = imageDataObj.likes +' likes';
    likes.className = 'likes';
    let user = document.createElement('span');
    user.className = 'user';
    user.textContent = imageDataObj.user;
    let profilePicture = document.createElement('img');
    profilePicture.src = imageDataObj.profileImage;
    profilePicture.className = 'profilePic';
    holder.appendChild(image);
    holder.appendChild(likes);
    holder.appendChild(user);
    holder.appendChild(profilePicture);
    fragment.appendChild(holder);
    gridContainer.appendChild(fragment);
};

const processDataArray = (dataArray) => {
    let imageDataObj = {};
    for (let i = 0; i < dataArray.length; i++) {
        imageDataObj = {
            thumb: dataArray[i].urls.thumb,
            likes: dataArray[i].likes,
            user: dataArray[i].user.name,
            profileImage: dataArray[i].user.profile_image.medium
        };
        createDocumentFragment(imageDataObj);
    }
};

let method = 'GET';
makeAjaxCall(url, method)
    .then((imageDataArray) => {
        processDataArray(imageDataArray);
    })
    .catch((err) => {
        console.log(err);
    });
    