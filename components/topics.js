import React, { Component } from 'react';

export default class TopicList extends Component {

    constructor(props) {
        super(props);
        this.state = { //state初期化
            isLoaded: false,
            items: []
        };
        this.filterList = this.filterList.bind(this);
    }

    getTopicDate = (date) => {
        var d = ''
        d = moment(date)
        return (
            d.format("YYYY.MM.DD")
        )
    }

    filterList = (e) => {
        const updateList = items.filter((topic) => {
            topic.category[0] == e.target.value
        })
        this.setState({ items: updateList })
    }

    componentDidMount() { //render直後に行いたい処理を書くところ
        const APIKEY = 'c690c293-352c-4eaf-93a2-0bb2dd89ee8b'
        const key = {
            headers: { 'X-API-KEY': APIKEY },
        };
        fetch('https://falconer.microcms.io/api/v1/topics', key) //api
            .then(res => res.json())
            .then(
                (result) => {
                  this.setState({
                    isLoaded: true,
                    items: result.items
                  });
                }
            )
            .catch((error) => {
                console.error(error);
            });

    }

    render() {
        var { items, isLoaded } = this.state;
        if (!isLoaded) {
            console.log('isLoaded-False');
            return <div>...Loading</div>;
        } else {
            console.log('isLoaded-True:' + items);
            return (
                <div>
                    <form action="">
                        <select onChange={(event) => { filterList(event) }}>
                            <option value="プレスリリース">プレスリリース</option>
                            <option value="お知らせ">お知らせ</option>
                            <option value="メディア">メディア</option>
                        </select>
                    </form>
                    <ul class="mx-auto w-11/12 md:w-full mt-12">
                        {this.state.items.map(topic => (
                            <li key={topic.id} class="flex flex-wrap md:flex-row md:justify-center py-4 border-b">
                                <Link href={`topics/${topic.id}`}>
                                    <a class="flex flex-wrap md:flex-row md:justify-center">
                                        <div class="w-28 md:w-32 md:text-center">{getTopicDate(`${topic.datetime}`)}</div>
                                        <div class={`${topic.category_color} rounded-2xl w-32 text-center`}>
                                            <span class="text-white hiraginoGo">{topic.category}</span>
                                        </div>
                                        <p class="w-full mt-2 md:mt-0 md:w-9/12 md:ml-4 hiraginoGo break-words">{topic.title}</p>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}