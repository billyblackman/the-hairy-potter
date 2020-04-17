import { getGoodPottery, getCrackedPottery } from "./pottery/potteryProvider.js";
import { PotteryForm } from "./pottery/PotteryForm.js";
import { PotteryList } from "./pottery/PotteryList.js";

getGoodPottery()
    .then(getCrackedPottery)
    .then(PotteryForm)
    .then(PotteryList)