import { getGoodPottery, getCrackedPottery } from "./pottery/potteryProvider.js";
import { PotteryForm } from "./pottery/PotteryForm.js";

getGoodPottery()
    .then(getCrackedPottery)
    .then(PotteryForm)