function data(){

    fetch('https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=40&pageNo=2&keyWord=&category=')
    .then(response => response.json())
    .then(data => {
        const result = data.data;
        const result2 = result.slice(0,6);


        function timeElapsed(date) {
            const now = new Date();
            const updatedDate = new Date(date);
            const diffInMs = now - updatedDate;
            const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

            if (diffInDays < 1) {
                return "Today";
            } else if (diffInDays < 30) {
                return `${diffInDays} days ago`;
            } else if (diffInDays < 365) {
                const diffInMonths = Math.floor(diffInDays / 30);
                return `${diffInMonths} months ago`;
            } else {
                const diffInYears = Math.floor(diffInDays / 365);
                return `${diffInYears} years ago`;
            }
        }
        result2.forEach((item)=>{
        let cardparent = document.querySelector(".cardparent")
    
    
        let salaryTextItem;
        if (item.payRangeStart === "" || item.payRangeEnd === "" || item.payRangeStart === null || item.payRangeEnd === null) {
            salaryTextItem = "No Salary Mentioned";
        } else {
            salaryTextItem = "RS" + item.payRangeStart + "-" + item.payRangeEnd;
        }
        let timeText = timeElapsed(item.updatedAt);

        cardparent.innerHTML += `<div class="card">
            <a href="#">
                <div class="card-upperpart">
                    <div class="card-portion1">
                        <p>${item.companyName ? item.companyName : "Anonymous"}</p>
                        <p>${item.designation}</p>
                        <span>${salaryTextItem}</span>
                    </div>
                    <div class="card-portion2">
                        <img src="./assest/icon.png" alt="">
                    </div>
    
                </div>
    
                <div class="card-lowerpart">
                    <div class="lower-box1">
                        <p></p>
                    </div>
                    <div class="lower-box2">
                        <p>${timeText}</p>
                        <p>${item.views}views</p>
                    </div>
                </div>
    
            </a>
        </div>`
    
    })

    });
        
}
data()

