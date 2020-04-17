import { getPottery } from "./pottery/potteryProvider.js";
import { PotteryForm } from "./pottery/PotteryForm.js";

getPottery()
    .then(PotteryForm)