const line = [
    'http://jx.hezeshi.net/index.php?url=',
    'http://vip.jlsprh.com/index.php?url=',
    'http://at520.cn/jx/pc.php?url=',
    'http://api.nobij.top/jx/?url=',
]
window.onload = () => {
    const go = (v, k) => {
        // chrome.tabs.getSelected(null, function (tab) { // 先获取当前页面的tabID
        //     chrome.tabs.sendMessage(tab.id, {
        //         greeting: "url"
        //     }, function (res) {
        //         // chrome.tabs.create({
        //         //     url: line[k] + res
        //         // });
        //         alert(line[k] + res)
        //     });
        // });


        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (tabs) {
            console.log(tabs[0].id)
            chrome.tabs.sendMessage(tabs[0].id, {
                greeting: "url",
            }, function (res) {
                chrome.tabs.create({
                    url: line[k] + res
                });
            });
        });

    }

    ['line1', 'line2', 'line3', 'line4'].forEach((v, k) => {
        document.getElementById(v).addEventListener('click', () => {
            go(v, k)
        })
    })
}