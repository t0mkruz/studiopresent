import axios from "axios";
import React, {useCallback, useLayoutEffect, useMemo, useState} from "react";
import {FlatList, RefreshControl} from "react-native";
import ListItem from "../components/listitems";

const Screen = ({route}) => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const renderItem = useCallback(_props => <ListItem key={_props.item.uuid} {..._props.item} />, []);

  const fetchAPI = () => {
    axios
      .get(`${route.params.url}`, {
        data: {},
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "cache-control": "no-cache",
        },
      })
      .then(({data: _data}) => {
        if (!data.length && JSON.stringify(_data) !== JSON.stringify(data)) {
          setData(_data);
        }
        setRefreshing(false);
      });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchAPI();
  }, []);

  useLayoutEffect(() => {
    fetchAPI();
  }, []);

  return useMemo(
    () =>
      data && (
        <>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => `LIST_ITEM_${item.uuid}_${item.title}_${Math.random()}`}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          />
        </>
      ),
    [data, refreshing],
  );
};

export default Screen;
