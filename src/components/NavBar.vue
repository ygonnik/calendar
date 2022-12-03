
<template lang="">
    <v-container>
        <v-app-bar class="header">
            <v-container class="header-container">
                <v-container class="control">
                    <v-container class="control-buttons">
                        <v-btn class="button" ><p>Добавить</p></v-btn>
                        <v-btn class="button"><p>Обновить</p></v-btn>
                    </v-container>
                    <v-container class="input-area">
                        <img class="search-img" :src="largeSearch">
                        <input class="search-input" placeholder="Placeholder"/>
                    </v-container>
                </v-container>
            </v-container>
        </v-app-bar>
        <v-container class="main">
            <v-container class="main-container">
                <v-container class="bottom-row">
                    <v-container class="month-control">
                        <v-btn class="button-left">
                            <v-container class="button-icon-left">
                                <img class="arrow-left" :src="largeArrow">
                            </v-container>
                        </v-btn>
                        <v-container class="mounth-control-text-container">
                            <p class="mounth-control-text">Ноябрь 2021</p>
                        </v-container>
                        <v-btn class="button-right">
                            <v-container class="button-icon-right">
                                <img class="arrow-right" :src="largeArrow">
                            </v-container>
                        </v-btn>
                    </v-container>
                    <v-btn class="extra-button"><p>Сегодня</p></v-btn>
                </v-container>
                <table class="main-table">
                    <tr class="main-row">
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                    </tr>
                    <tr class="main-row">
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                    </tr>
                    <tr class="main-row">
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                    </tr>
                    <tr class="main-row">
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                    </tr>
                    <tr class="main-row">
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                    </tr>
                    <tr class="main-row">
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                        <th class="main-cell">
                            <div class="cell-heading">
                                <p>Понедельник</p>
                            </div>
                            <div class="cell-title">
                                <p>Шашлыки</p>
                            </div>
                            <div class="cell-description">
                                <p>Филипп Коров, Дмитрий Табасков</p>
                            </div>
                        </th>
                    </tr>
                </table>
            </v-container>
        </v-container>
    </v-container>
</template>
<script>
import largeSearch from '../../public/largeSearch.png';
import largeArrow from '../../public/largeArrow.png';
export default {
    data() {
        return {
            largeSearch,
            largeArrow
        };
    }
}
</script>
<style lang="css">
    @import '../styles/styles.css';
</style>