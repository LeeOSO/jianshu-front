import styled from 'styled-components';


export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    float: left;
    padding-top: 30px;
    width: 625px;
    .banner-img {
        width: 100%;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    float: right;
    width: 280px;
`;

export const BackTop = styled.div`
    position: fixed;
    width: 100px;
    height: 100px;
    right: 100px;
    bottom: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    border: 1px sold #dcdcdc;
`


export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;
`;


export const TopicItem = styled.div`
    float: left;
    background: red;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    font-size: 14px;
    color: #000;
    background: #f7f7f7;
    border: 1px sold #dcdcdc;
    border-radius: 4px;
    margin-bottom: 18px;
    .topic-pic {
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        width: 125px;
        height: 100px;
        float: right;
        display: block;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    margin: 30px 0;
    cursor: pointer;
`;


export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain
`;

export const WriterWrapper = styled.div`
    width: 278px;
    height: 300px;
    text-align: center;
`;

export const WriterHeader = styled.div`
    width: 278px;
    height: 20px;
    line-height: 20px;
    text-align: left;
    .title {
        font-size: 14px;
        color: #969696;
    }
    .change {
        font-size: 14px;
        color: #969696;
        display: inline-block;
        float: right;
    }
`;

export const WriterContainer = styled.ul`
    margin: 0 0 20px;
    text-align: left;
    list-style: none;
    padding-left: 0;
`;

export const WriterItem = styled.li`
    margin-top: 15px;
    width: 100%;
    .avatar {
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        display: block;
    }
    .avatar_img {
        width: 100%;
        height: 100%;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
    .follow {
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        font-weight: 400;
        line-height: normal;
    }
    .name {
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        padding-left: 23px;
        display: block;
    }
    .info {
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
`;

