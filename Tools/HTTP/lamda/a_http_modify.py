from mitmproxy import http
import json

url = 'api/funds/my_assets'

def request(flow: http.HTTPFlow):
    print('请求url:', flow.request.url)

    # 修改请求头
    # 17727227689----123456lxr----2619fc1380c2fc10
    # flow.request.headers["other"] = "2619fc1380c2fc10"
    flow.request.headers["deviceid"] = "2619fc1380c2fc10"
    # flow.request.headers["deviceidhash"] = "shuzf"
    flow.request.headers["token"] = "913ba78d-f08b-4d19-a9b1-79f088193131"


        # 获取url 键值对请求参数
        # print('请求query:', flow.request.query)
        # print('请求json:', flow.request.json)
        # 增加header
        # flow.request.headers.update('deviceid')
        # flow.request.headers.add('deviceid', 'deviceid')
        # flow.request.headers.add('trump', 'trump123')
        # flow.request.query.add('aaa', '111')
        # flow.request.json = {"bbb": "222"}


# def response(flow: http.HTTPFlow):
    # if url in flow.request.url:
        # 状态码
        # print(f'状态码: {flow.response.status_code}')
        # 返回内容，已解码
        # print(f'返回内容: {flow.response.text}')

        # 修改响应的文本
        # flow.response.set_text('{"code":1}')
        # 修改响应的json 从文件读取替换
        # with open('a_http_response.json', 'r') as rf:
        #     data = json.load(rf)
        # flow.response.set_text(json.dumps(data))